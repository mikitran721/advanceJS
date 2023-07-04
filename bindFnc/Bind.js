const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// console.log($("#heading"));

const app = (() => {
  const cars = ["BMW"];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) => `
            <li>
            ${car}
            <span class="delete" data-index = "${index}">&times</span>
            </li>
        `
        )
        .join(""); //tra ve string thay vi array

      root.innerHTML = html;
    },
    handleDelete(event) {
      // deleteBtn se la span.delete neu no dc nhan; ko thi no se la null;
      const deleteBtn = event.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index; //lay data-set
        console.log(this);
        this.delete(index);
        this.render();
      }
    },

    init() {
      //Handle DOM events
      /* arrowfunc khong co context; no se lay context o vung ben ngoai bao no */

      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null;
        input.focus();
      };

      /* Do #root co san nen se lang nghe event tren no; <li> tao ra khi addnew nen se rac roi */
      root.onclick = this.handleDelete.bind(this);
      this.render(); //this === app
    },
  };
})(); //IIFE

app.init();
