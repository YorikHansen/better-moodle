import { FeatureTranslation } from '../../../../types/i18n';

export const de = {
    settings: {
        amount: {
            name: 'Kacheln pro Zeile',
            description:
                'Zahl der Kacheln pro Zeile auf der "Meine Kurse"-Seite, wenn die Ansicht auf "Kacheln" gestellt ist. (Ist bis zu einer Fenster-/Bildschirmbreite bis 840px aktiv)',
        },
    },
} satisfies FeatureTranslation;

export const en = {
    settings: {
        amount: {
            name: 'Tiles per row',
            description:
                'Number of tiles per row on the "My Courses" page when the view is set to "Tiles". (Is active up to a window/screen width of 840px)',
        },
    },
} satisfies typeof de;

export default { de, en };
