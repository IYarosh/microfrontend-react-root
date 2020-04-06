import * as singleSpa from 'single-spa'
import * as app1obj from 'microfrontend-react-app1';

console.log(app1obj)

const app1 = 'app1';
const app2 = 'app2';

const app1Loader = () => import('microfrontend-react-app1');
const app2Loader = () => import('microfrontend-react-app2');

let activeTab = 1;

const app1ShowHandler = () => activeTab === 1;
const app2ShowHandler = () => activeTab === 2;

document.getElementById('btn-tab-active-1').addEventListener('click', () => {
    activeTab = 1;
    singleSpa.triggerAppChange();
})

document.getElementById('btn-tab-active-2').addEventListener('click', () => {
    activeTab = 2;
    singleSpa.triggerAppChange();
})

singleSpa.registerApplication(app1, app1Loader, app1ShowHandler);
singleSpa.registerApplication(app2, app2Loader, app2ShowHandler);
singleSpa.start();