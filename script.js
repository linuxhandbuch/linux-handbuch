// categories wird aus content.js geladen (muss vor script.js eingebunden sein)
let currentCommandIndex = 0;

function renderCategories() {
    const navList = document.getElementById('nav-list');
    navList.innerHTML = '';

    categories.forEach((cat, index) => {
        const li = document.createElement('li');
        li.className = 'category-item' + (index === currentCategoryIndex ? ' active' : '');
        li.textContent = cat.name;
        li.addEventListener('click', () => {
            currentCategoryIndex = index;
            currentCommandIndex = 0;
            render();
        });
        navList.appendChild(li);
    });
}

function renderCommandList() {
    const tocList = document.getElementById('toc-list');
    tocList.innerHTML = '';

    const commands = categories[currentCategoryIndex].commands;

    commands.forEach((cmd, index) => {
        const li = document.createElement('li');
        li.className = 'command-btn' + (index === currentCommandIndex ? ' active' : '');
        li.textContent = cmd.title;
        li.addEventListener('click', () => {
            currentCommandIndex = index;
            render();
        });
        tocList.appendChild(li);
    });
}

function renderContent() {
    const cmd = categories[currentCategoryIndex].commands[currentCommandIndex];
    const catName = categories[currentCategoryIndex].name;
    const contentArea = document.getElementById('content-area');

    const examplesHtml = cmd.examples.map(ex => `
        <div class="example-item">
            <div class="example-header">
                <code><span class="prompt">$</span> ${ex.cmd}</code>
                <button class="copy-btn-small" data-copy="${ex.cmd}">Kopieren</button>
            </div>
            <p class="example-desc">${ex.desc}</p>
            ${ex.output ? `<pre class="example-output">${ex.output}</pre>` : ''}
        </div>
    `).join('');

    const optionsHtml = cmd.options.map(opt => `
        <div class="option-item">
            <span class="option-flag flag-${opt.color}">${opt.flag}</span>
            <span>${opt.desc}</span>
        </div>
    `).join('');

    const badgeClass = cmd.level === 'FORTGESCHRITTEN' ? 'badge-advanced' : 'badge-beginner';

    contentArea.innerHTML = `
        <div class="breadcrumb">Kategorien › ${catName} › ${cmd.title}</div>

        <div class="page-title">
            <h1>${cmd.title}</h1>
            <span class="badge ${badgeClass}">${cmd.level}</span>
        </div>

        <p class="page-description">${cmd.description}</p>

        <h4 class="section-label">SYNTAX</h4>
        <div class="syntax-box">
            <code>$ ${cmd.syntax}</code>
            <button class="copy-btn" data-copy="${cmd.syntax}">Kopieren</button>
        </div>

        ${cmd.examples.length ? `
            <h4 class="section-label">BEISPIELE</h4>
            <div class="example-list">${examplesHtml}</div>
        ` : ''}

        ${cmd.options.length ? `
            <h4 class="section-label">OPTIONEN</h4>
            <div class="options-grid">${optionsHtml}</div>
        ` : ''}

        ${cmd.hint ? `
            <div class="hint-box">
                <span class="hint-tag">HINWEIS</span>
                <p>${cmd.hint}</p>
            </div>
        ` : ''}
    `;

    contentArea.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(btn.dataset.copy);
            const original = btn.textContent;
            btn.textContent = '✓ Kopiert';
            setTimeout(() => { btn.textContent = original; }, 1500);
        });
    });
}

function renderFooter() {
    const commands = categories[currentCategoryIndex].commands;
    const catName = categories[currentCategoryIndex].name;

    document.getElementById('progress-text').textContent =
        `${currentCommandIndex + 1} von ${commands.length} · ${catName}`;

    const prevLabel = document.getElementById('prev-label');
    const nextLabel = document.getElementById('next-label');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    if (currentCommandIndex > 0) {
        prevLabel.textContent = commands[currentCommandIndex - 1].title;
        btnPrev.style.visibility = 'visible';
    } else {
        btnPrev.style.visibility = 'hidden';
    }

    if (currentCommandIndex < commands.length - 1) {
        nextLabel.textContent = commands[currentCommandIndex + 1].title;
        btnNext.style.visibility = 'visible';
    } else {
        btnNext.style.visibility = 'hidden';
    }
}

function render() {
    renderCategories();
    renderCommandList();
    renderContent();
    renderFooter();
    document.getElementById('content-area').scrollTop = 0;
}

document.getElementById('btn-prev').addEventListener('click', (e) => {
    e.preventDefault();
    if (currentCommandIndex > 0) {
        currentCommandIndex--;
        render();
    }
});

document.getElementById('btn-next').addEventListener('click', (e) => {
    e.preventDefault();
    const commands = categories[currentCategoryIndex].commands;
    if (currentCommandIndex < commands.length - 1) {
        currentCommandIndex++;
        render();
    }
});

render();