import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import { version } from './package.json';
import * as path from 'node:path';
import * as fs from 'node:fs';
import Config from './configs/_config';

const configFile =
    process.argv
        .find(arg => arg.startsWith('--config='))
        ?.replace('--config=', '') ??
    new Error('No config specified. Please set a config with --config=...');

if (configFile instanceof Error) throw configFile;

const config = JSON.parse(
    fs.readFileSync(`./configs/${configFile}.json`, 'utf-8')
) as Config;

const githubUrl = `https://github.com/${config.github.user}/${config.github.repo}`;
const releaseDownloadUrl = `${githubUrl}/releases/latest/download`;

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        jsxInject:
            'import {createElement, Fragment as createFragment} from "jsx-dom";',
        jsxFactory: 'createElement',
        jsxFragment: 'createFragment',
        jsx: 'transform',
    },
    build: {
        minify: false,
        cssMinify: false,
        target: 'es2022',
    },
    css: {
        modules: {
            scopeBehaviour: 'local',
            hashPrefix: 'better-moodle',
            localsConvention: 'camelCaseOnly',
            generateScopedName: (name, filename) => {
                // Skip global styles
                if (!name.startsWith('_')) return name;

                // extract feature name from filename
                const feat = path
                    .relative(__dirname, filename)
                    .replace(/^src\/style\/|\.module\.(scss|sass)$/g, '') // extract feature name
                    .replace(/[^a-zA-Z0-9_-]/, '-') // replace invalid characters with hyphen
                    .replace(/-+/g, '-'); // reduce multiple hyphens to a single one

                return `better-moodle_${feat}__${name.replace(/^_/, '')}`;
            },
        },
    },
    define: {
        __GITHUB_USER__: JSON.stringify(config.github.user),
        __GITHUB_REPO__: JSON.stringify(config.github.repo),
        __GITHUB_URL__: JSON.stringify(githubUrl),
    },
    plugins: [
        monkey({
            entry: 'src/core.tsx',
            userscript: {
                'name': `🎓️ ${config.uniName}: better-moodle 2`,
                'namespace': config.namespace,
                version,
                'author': [
                    'Jan (jxn_30)', // core contributor
                    'Yorik (YorikHansen)', // core contributor
                    ...(config.additionalAuthors ?? []),
                ].join(', '),
                'description': config.description,
                'homepage': githubUrl,
                'homepageURL': githubUrl,
                'icon': config.icon,
                'updateURL': `${releaseDownloadUrl}/better-moodle.meta.js`,
                'downloadURL': `${releaseDownloadUrl}/better-moodle.user.js`,
                'match': `${config.moodleUrl}/*`,
                'run-at': 'document-body',
                'connect': config.connects,
            },
            clientAlias: 'GM',
            build: {
                fileName: 'better-moodle.user.js',
                metaFileName: 'better-moodle.meta.js',
                autoGrant: true,
            },
        }),
    ],
});
