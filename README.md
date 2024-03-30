## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy other platform plesk

1. Create a new domain in Plesk and set nodejs
2. import repositori
3. configurar los siguientes parametros en pleskNode.js 
   ```Version: node v21.7.1
   Package Manager: npm  
   Document Root: /httpdocs/.next/static    
   Application Mode: production
   Application URL: http://romantic-kare.82-223-55-172.plesk.page
   Application Root: /httpdocs 
   Application Startup File: node_modules/.bin/next
   ```
4. acceso por ssh
5. npm i
6. vi node_modules/.bin/next
7. search /dev
8. replace "dev" with "start"
9. :wq! //save and exit
10. npm run build
11. listo!!!!  
