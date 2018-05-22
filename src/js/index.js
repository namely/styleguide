import AppRouter from './router';

window.router = new AppRouter();
window.router.history.start({ pushState: true });
