import './bootstrap';
import '../css/app.css';
//import 'primereact/resources/themes/lara-light-purple/theme.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import { PrimeReactProvider } from 'primereact/api';



import { ParallaxProvider } from 'react-scroll-parallax';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <PrimeReactProvider>
                <ParallaxProvider>
                    <App {...props} />
                </ParallaxProvider></PrimeReactProvider>
            
        );
    },
    progress: {
        color: '#4B5563',
    },
});
