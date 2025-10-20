// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";
import React from 'react';

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel({
        
    })
});
