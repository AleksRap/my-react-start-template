module.exports = plop => {
  const stylesTemplateFile = 'templates/generics/styles.hbs';
  const stylesPath = (entity) => `../src/${entity}s/{{ name }}/styles.module.scss`;

  const template = 'templates/generics/index.hbs';
  const indexPath = (entity) => `../src/${entity}s/{{ name }}/index.tsx`;

  function genericSetGenerator(entity) {
    plop.setGenerator(entity, {
      prompts: [{
        type: 'input',
        name: 'name',
        message: `${entity} name please'`,
      }],
      actions: (data) => {
        const actions = [{
          type: 'add',
          path: stylesPath(entity),
          templateFile: stylesTemplateFile,
          abortOnFail: true,
        }];

        actions.push({
          type: 'add',
          path: indexPath(entity),
          templateFile: template,
          abortOnFail: true,
        })

        return actions;
      },
    });
  }

  plop.setGenerator('component', {
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name please',
    }],
    actions: [
      {
        type: 'add',
        path: stylesPath('component'),
        templateFile: stylesTemplateFile,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ name }}/{{ camelCase name }}.stories.tsx',
        templateFile: 'templates/components/stories.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: indexPath('component'),
        templateFile: 'templates/components/index.hbs',
        abortOnFail: true,
      },
    ],
  });

  genericSetGenerator('container');
  genericSetGenerator('page');
};
