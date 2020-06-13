import '../components/tail-list.js';
import '../components/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const tailListElement = document.querySelector("tail-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchTail(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        tailListElement.tails = results;
    };

    const fallbackResult = message => {
        tailListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;