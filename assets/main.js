console.log("test");

// Asynchronous function to fetch Astronomy Picture of the Day (APOD) from NASA API
async function fetchAPOD() {
    console.log('in function fetchAPOD');
    try {

        // Get selected date from date picker
        const selectDate = document.getElementById('selectDate').value;
        const Key = 'denICih0N1lG506SbAusNftWWFxezoyf2wpW9gWy'; // my Key
        const url = `https://api.nasa.gov/planetary/apod?api_key=${Key}&date=${selectDate}`;

        // Fetch data from NASA API
        const response = await fetch(url);
        const data = await response.json();

        // Display APOD data on the webpage
        // displayAPOD(data);
        // Log fetched data for testing purposes
        console.log(data);

        // Get the container element for APOD data
        const dataApod = document.getElementById('dataApod');

        // Clear previous content
        dataApod.innerHTML = '';

        // Create HTML elements for APOD title, date, explanation, and image
        const title = document.createElement('h2');
        title.textContent = data.title;

        const date = document.createElement('p');
        date.textContent = data.date;

        const explanation = document.createElement('h3');
        explanation.textContent = data.explanation;

        const apodImage = document.createElement('img');
        apodImage.id = 'apodImage';
        apodImage.src = data.url;
        apodImage.alt = data.title;

        // Append created elements to the container
        dataApod.appendChild(title);
        dataApod.appendChild(date);
        dataApod.appendChild(apodImage);
        dataApod.appendChild(explanation);

    } catch (error) {
        // Handle errors during API fetch
        console.error('Error fetching APOD:', error);
    }
}

// Event listener for the button click to fetch and display APOD
document.getElementById('ShowButton').addEventListener('click', (event) => {
    event.preventDefault();
    fetchAPOD();
});
