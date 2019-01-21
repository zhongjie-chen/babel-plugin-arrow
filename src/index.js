export default function({types: t }) {
  const updateTemplateElementVisitor = {
    TemplateElement(path) {
      console.log(path.node.value);
      if (path.node.value && path.node.value.raw === 'ant-') {
        path.node.value = {
          raw: 'arrow-',
          cooked: 'arrow-'
        }
      }
    }
  }
  const updateLiteralVisitor = {
    Literal(path) {
      if (path.node.value === 'ant') {
        path.node.value = 'arrow'
        path.node.arrow = "'arrow'"
      }
    }
  };
  return {
    visitor: {
      VariableDeclarator: (path) => {
        if (path.node.id.name === 'ConfigContext') {
          path.traverse(updateTemplateElementVisitor, path.node.init)
        }
      },
      ClassDeclaration: (path) => {
        if (path.node.id.name === 'ConfigProvider') {
          path.traverse(updateLiteralVisitor, path.node.body)
        }
      }
    }
  };
}
