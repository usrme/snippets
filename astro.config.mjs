import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Snippets',
      customCss: [
        './src/styles/starlight.css',
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Ansible', link: '/snippets/ansible' },
            { label: 'Docker/Podman', link: '/snippets/docker-podman' },
            { label: 'Git', link: '/snippets/git' },
            { label: 'Kubernetes', link: '/snippets/kubernetes' },
            { label: 'PowerShell', link: '/snippets/powershell' },
            { label: 'Shell', link: '/snippets/shell' },
            { label: 'Vim', link: '/snippets/vim' },
          ],
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            src: '//gc.zgo.at/count.js',
            'data-goatcounter': 'https://usrme.goatcounter.com/count',
            defer: true,
          },
        },
      ],
    }),
  ],
});
