function createCard(title, text, buttons) {
    // Create the main card container
    const colDiv = document.createElement('div');
    colDiv.className = 'col';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card shadow-sm';

    // Create the card body
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = text;

    // Create the button group
    const buttonGroupDiv = document.createElement('div');
    buttonGroupDiv.className = 'd-flex justify-content-between align-items-center';
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    // Create buttons from the buttons dictionary
    for (const [label, target] of Object.entries(buttons)) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-sm btn-outline-secondary';
        button.textContent = label;
        button.onclick = () => {
            window.location.href = target; // or any other action
        };
        btnGroup.appendChild(button);
    }

    // Append everything to the card
    buttonGroupDiv.appendChild(btnGroup);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(buttonGroupDiv);
    cardDiv.appendChild(img);  // Append image to the card
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);

    return colDiv;
}

var c = createCard("Percentage Calculator", "Calculates your percentage", {"Visit" :"./percentage-calculator/"},);
document.getElementById("shitContainer").appendChild(c);
c = createCard("Clock", "Its a clock, what more do you need", {"Visit" :"./clock/"},);
document.getElementById("shitContainer").appendChild(c);
