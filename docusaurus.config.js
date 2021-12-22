// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    scripts: [
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1170026826543915',
            anonymous: true,
        },
    ],
    title: 'Kiri',
    tagline: 'Your devotive Discord bot',
    url: 'https://kiribot.xyz',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Kiri-Discord', // Usually your GitHub org/user name.
    projectName: 'kiri-docs', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Kiri-Discord/kiri-docs/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Kiri',
            logo: {
                alt: 'Kiri logo',
                src: 'img/logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Help and Documentation',
                },
                {
                    to: '/faq',
                    position: 'left',
                    label: 'FAQ',
                },
                {
                    to: '/privacy',
                    position: 'left',
                    label: 'Privacy Policy',
                },
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://discord.com/oauth2/authorize?client_id=859116638820761630&permissions=139556416887&scope=bot%20applications.commands',
                    label: 'Invite me',
                    position: 'right',
                },
                {
                    href: 'https://discord.gg/D6rWrvS',
                    label: 'Our community server',
                    position: 'right',
                },
                {
                    href: 'https://discord.gg/kJRAjMyEkY',
                    label: 'Our support server',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //     title: 'Help',
                //     items: [{
                //         label: 'Getting Started',
                //         to: '/docs/intro',
                //     }],
                // },
                {
                    title: 'Community',
                    items: [{
                            label: 'Top.gg Website',
                            href: 'https://top.gg/bot/859116638820761630',
                        },
                        {
                            label: 'Discord Support Server',
                            href: 'https://discord.gg/kJRAjMyEkY',
                        },
                        {
                            label: 'Discord Community Server',
                            href: 'https://discord.gg/D6rWrvS',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Kiri-Discord',
                        },
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} Kiri`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;