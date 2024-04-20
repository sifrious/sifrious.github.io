



// comfort zone skills

const python = {
    name: 'python',
    level: 4,
    projects: [],
};
const postgresql = {
    name: 'postgresql',
    level: 4,
    projects: [],
};
const javascript = {
    name: 'vanilla javascript',
    level: 4,
    projects: [],
};
const css = {
    name: 'css',
    level: 4,
    projects: [],
};
const html = {
    name: 'html',
    level: 4,
    projects: [],
};
const vms = {
    name: 'vms',
    // name: 'hosting on virtual machines',
    level: 4,
    projects: [],
};
const macos = {
    name: 'mac os',
    level: 4,
    projects: [],
};
const ubuntu = {
    name: 'ubuntu linux',
    level: 4,
    projects: [],
};
const adobe = {
    name: 'adobe suite design software',
    level: 4,
    projects: [],
};
const sheets = {
    name: 'google sheets',
    level: 4,
    projects: [],
};
const excel = {
    name: 'microsoft excel',
    level: 4,
    projects: [],
};
const comfort_zone_skills = [python,
    postgresql,
    javascript,
    css,
    html,
    vms,
    macos,
    ubuntu,
    adobe,
    sheets,
    excel,
];

// I'm Solid With
const docker = {
    name: 'docker',
    level: 3,
    projects: [],
};
const flask = {
    name: 'flask',
    level: 3,
    projects: [],
};
const contanerization = {
    // name: 'hosting using containerized enviornments',
    name: 'containers',
    level: 3,
    projects: [],
};
const bash = {
    name: 'bash',
    level: 3,
    projects: [],
};
const fedora = {
    name: 'fedora linux',
    level: 3,
    projects: [],
};
const mysql = {
    name: 'sqlite',
    level: 3,
    projects: [],
};
const gas = {
    name: 'google apps scripting',
    level: 3,
    projects: [],
};
const solid = [
    docker,
    flask,
    contanerization,
    bash,
    fedora,
    mysql,
    gas,
];

//
const k8s = {
    name: 'k8s w/ aws and google',
    level: 2,
    projects: [],
};
const kafka = {
    name: 'message streaming w/kafka',
    level: 2,
    projects: [],
};
const vns = {
    name: 'virtual networks',
    level: 2,
    projects: [],
};
const cloud = {
    name: 'cloud computing',
    level: 2,
    projects: [],
};
const cloudnative = {
    name: 'cloud native development',
    level: 2,
    projects: [],
};
const microservices = {
    name: 'microservices',
    level: 2,
    projects: [],
};
const drupal = {
    name: 'drupal',
    level: 2,
    projects: [],
};
const php = {
    name: 'php',
    level: 2,
    projects: [],
};
const laravel = {
    name: 'laravel',
    level: 2,
    projects: [],
};
const react = {
    name: 'react',
    level: 2,
    projects: [],
};
const angular = {
    name: 'angular',
    level: 2,
    projects: [],
};
const wordpress = {
    name: '',
    level: 2,
    projects: [],
};
const vue = {
    name: 'vue',
    level: 2,
    projects: [],
};
const new_skills = [
    k8s,
    kafka,
    vns,
    cloud,
    cloudnative,
    microservices,
    drupal,
    php,
    laravel,
    react,
    angular,
    wordpress,
    vue,
];

// excited about
const go = {
    name: 'go',
    level: 0,
    projects: [],
};
const network_automation = {
    name: 'network automation',
    level: 0,
    projects: [],
};
const livewire = {
    name: 'livewire',
    level: 0,
    projects: [],
};
const pest = {
    name: 'pest/TDD',
    level: 0,
    projects: [],
};
const svg = {
    name: 'SVG Animation',
    level: 0,
    projects: [],
};
const accessability = {
    name: 'accessability',
    level: 0,
    projects: [],
};
const exciting = [
    go,
    network_automation,
    livewire,
    pest,
    svg,
    accessability,
];

// 
const load_skills = function() {
    function create_skill_button(skill, skill_class) {
        button = document.createElement('div');
        if (skill.name.length > 0){
            let obj_reference = skill.name.toLowerCase();
            obj_reference = obj_reference.replace(" ", "");
            button.innerText = skill.name;
            button.id = `lvl${skill.level}-${obj_reference}`;
            // button.classList = [obj_reference, skill_class, 'skill-item', 'skill-container'];
            button.classList.add(skill_class);
            button.classList.add('skill-item');
            button.classList.add('skill_container');
        } else {
            button.classList = "hidden";
        };
        return button;
    }

    function create_skill_toggle_row(skill_group) {
        let skill_row = document.createElement('div');
        skill_row.classList.add('skill-group-row');
        skill_row.classList.add(`${skill_group.class}-container`);
        // 
        let skill_row_check_div = document.createElement('div');
        skill_row_check_div.id = `${skill_group.class}-checkbox-container`;
        skill_row_check_div.classList.add('check-div');
        skill_row_check_div.classList.add(`${skill_group.class}-toggle`);
        if (skill_group.class !== "skill-button-exciting") {
            skill_row_check_div.classList.add('skill-unchecked');
            skill_row_check_div.setAttribute("aria-expanded", "false");
        } else {
            skill_row_check_div.classList.add('skill-checked');
            skill_row_check_div.setAttribute("aria-expanded", "true");
        }
        //  
        // let skill_row_check_box = document.createElement('div');
        // skill_row_check_box.checked = true;
        // skill_row_check_box.setAttribute("aria-expanded", "true");
        // skill_row_check_box.id = `${skill_group.class}-checkbox`;
        // skill_row_check_box.id = `skill-checked`;
        // skill_row_check_box.classList.add = `${skill_group.class}-checkbox`;
        // skill_row_check_box.classList.add = `skill-toggle-checkbox`;
        //
        // skill_row_check_div.appendChild(skill_row_check_box);
        skill_row.appendChild(skill_row_check_div);
        // 
        let skill_row_label = document.createElement('div');
        skill_row_label.innerText = skill_group.heading;
        skill_row.appendChild(skill_row_label);
        return skill_row;
    }

    const skill_groups = [
        {
            'list': comfort_zone_skills,
            'time': '',
            'heading': "My Comfort Zone",
            'class': 'skill-button-comfort'
        },
        {
            'list': solid,
            'time': '',
            'heading': "I'm Solid With",
            'class': 'skill-button-solid'
        },
        {
            'list': new_skills,
            'time': '',
            'heading': "I'm Learning",
            'class': 'skill-button-new'
        },
        {
            'list': exciting,
            'time': '',
            'heading': "I'm Interested In",
            'class': 'skill-button-exciting'
        },
    ];

    const skill_container = document.getElementById("skills-container");
    var main_skill_container = document.createElement('div');
    main_skill_container.id = "main-skill-container";
    var skill_toggle_container = document.createElement('div');
    skill_toggle_container.id = "main-skill-toggle-container";
    for (let skill_group of skill_groups) {
        let skill_group_container = document.createElement('div');
        skill_group_container.classList = ['skillGroupContainer', skill_group.class];
        const skill_row = create_skill_toggle_row(skill_group);
        skill_toggle_container.appendChild(skill_row);
        for (let skill of skill_group.list) {
            skill_group_button = create_skill_button(skill, skill_group.class);
            // skill_group_container.appendChild(skill_group_button);
            main_skill_container.appendChild(skill_group_button);
        };
        skill_container.append(main_skill_container);
        skill_container.append(skill_toggle_container);
        // skill_container.append(skill_group_container);
    };
}
window.onload = load_skills();