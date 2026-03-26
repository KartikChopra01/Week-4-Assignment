class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.isOpen = false;
    }

    toggle(itemDiv, iconSpan) {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            itemDiv.classList.add("active");
            iconSpan.innerText = "-";
        } else {
            itemDiv.classList.remove("active");
            iconSpan.innerText = "+";
        }
    }

    render() {
        const itemDiv = document.createElement("div");
        itemDiv.className = "faq-item";

        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        const iconSpan = document.createElement("span");
        iconSpan.className = "icon";
        iconSpan.innerText = "+";

        questionDiv.appendChild(iconSpan);
        questionDiv.appendChild(document.createTextNode(this.question));

        const answerDiv = document.createElement("div");
        answerDiv.className = "answer";
        answerDiv.innerText = this.answer;

        questionDiv.addEventListener("click", () => {
            this.toggle(itemDiv, iconSpan);
        });

        itemDiv.appendChild(questionDiv);
        itemDiv.appendChild(answerDiv);

        return itemDiv;
    }
}

const faqList = [
    new QAItem("What is JavaScript?", "JavaScript is a programming language used for web development."),
    new QAItem("What is HTML?", "HTML is the structure of a webpage."),
    new QAItem("What is CSS?", "CSS is used to style web pages.")
];

const container = document.getElementById("faq-container");

for (let i = 0; i < faqList.length; i++) {
    container.appendChild(faqList[i].render());
}