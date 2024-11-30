import { getSettingKey, isNewInstallation } from '@/helpers';

const STORAGE_VERSION_KEY = 'storageVersion';
const CURRENT_STORAGE_VERSION = 2;

export const STORAGE_V2_SEEN_SETTINGS_KEY = 'seenSettings';
export const STORAGE_V2_LANGUAGE_KEY = getSettingKey('general.language');

/**
 * Gets a value from storage and deletes it afterwards
 * @param key - the key
 * @param defaultValue - a value to use when the key does not exist in storage
 * @returns the value from storage
 */
const getAndDelete = <Type>(key: string, defaultValue?: Type) => {
    const value = GM_getValue<Type>(key, defaultValue);
    GM_deleteValue(key);
    return value;
};

// TODO: Export a migration helper function?

(() => {
    const oldStorageVersion = GM_getValue<number>(STORAGE_VERSION_KEY, 0);
    // Yay, storage is already migrated :)
    // Or this may also be a fresh installation where obviously nothing needs to be migrated
    if (oldStorageVersion === CURRENT_STORAGE_VERSION || isNewInstallation) {
        return;
    }

    // settings will migrate themselfes as they know their respective aliases / old keys the best. No need to do this here.
    // features will also migrate their storage themselfes. This is only for core storage keys

    // migration to storage version 2
    if (oldStorageVersion < 2) {
        // Storage that remembers which settings have already been seen. Setting keys are not migrated here as settings are not initialized yet
        const oldSeenSettings = getAndDelete<string[]>(
            'better-moodle-seen-settings',
            []
        );
        if (oldSeenSettings.length) {
            GM_setValue(STORAGE_V2_SEEN_SETTINGS_KEY, oldSeenSettings);
        }
        // As said above, settings are migrating themselfes. But as language setting value is queried before the setting is able to register itself, we need to migrate it manually.
        const oldLanguage = getAndDelete<string>(
            'better-moodle-settings.general.language'
        );
        if (oldLanguage) {
            GM_setValue(STORAGE_V2_LANGUAGE_KEY, oldLanguage);
        }
    }

    GM_setValue(STORAGE_VERSION_KEY, CURRENT_STORAGE_VERSION);
})();
