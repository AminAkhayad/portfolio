import data from "../data/data.json";

const dataController = async () => {


    const $dataContainers = document.querySelectorAll("[data-component='data']");

    $dataContainers.forEach(($dataContainer, index) => {
        if (index < data.length) {
            $dataContainer.innerHTML = `
            
            <a href="project.html?id=${data[index].id}" target="_blank">
            <img src="${data[index].img}" alt="${data[index].title}"/>
                <h2>${data[index].title}</h2>
            </a>
            `;
        }
    });
}

const generateStringForTechnologies = (technologies) => {
    let string = "<ul>";
    technologies.forEach((technology) => {
        string += `<li>${technology}</li>`;
    });
    string += "</ul>";
    return string;
}
const dataControllerDetail = async () => {
    const getParams = (url) => {
        const params = {};
        new URL(url).searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }
    const params = getParams(window.location.href);
    console.log(params);
    data.forEach((item) => {
        if (item.id === parseInt(params.id)) {
            console.log("true");
            const $dataContainer = document.querySelector("[data-component='data-detail']");
            $dataContainer.innerHTML = `
            <img src="${item.img}" alt="${item.title}"/>
            <div class="information-container">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <h2><strong>Technologieën:</strong></h2>
            ${generateStringForTechnologies(item.technologies)}
            <div class="link-project">
                        <a href="${item.link}" target="_blank">Bekijk de code voor dit project! <img src="static/img/arrow-right.svg" alt="arrow"></a>
            </div>

            </div>
            
            `;
        }
    });
}

export default dataController;
export { dataControllerDetail };
