# Web Performance 2

THIS IS STILL IN PROGRESS

[Visit the live app here](https://webperf2.netlify.app/)

## Stuff done

- [x] Vite with imagemin & cssnano
- [x] Convert images to .webp
- [x] Installed font used in google fonts to local (Montserrat)
- [ ] Setup lighthouse into GH CI
- [ ] Add bundler, api & metric analytics
- [ ] Add conditional redirects

## PM2 Production start

### 1. Install pm2

```bash
npm install -g pm2
```

### 2. Build project

```bash
npm run build
```

### 3. Start

```bash
pm2 start npm --name "my-app" -- run server
```

### 4. Manage

- List running processes: pm2 list
- Stop a process: pm2 stop my-app
- Restart a process: pm2 restart my-app
- Delete a process: pm2 delete my-app
- View logs: pm2 logs my-app

Make it restart automatically

```bash
pm2 startup && pm2 save
```
