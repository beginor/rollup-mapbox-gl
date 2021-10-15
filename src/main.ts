import './main.scss';

declare function getQueryString(key: string): string | undefined;

let demo = getQueryString('demo');
if (!demo) {
    import('./app/app').then(m => {
        const elementId = 'app';
        const container = document.getElementById(elementId);
        if (!container) {
            throw new Error(`Element with id ${elementId} doesn't exists !`)
        }
        const app = new m.App(container);
        app.run();
    }).catch(ex => {
        console.error(ex);
    });
}
else {
    demo = `./${demo}.js`
    void import(demo).then(m => { debugger; m.default() });
}


