export default function({types: t }) {
  const updateConfigContentLiteralVisitor = {
    Literal(path) {
      if (path.node.value === 'ant-') {
        path.node.value = 'arrow-'
        path.node.arrow = "\"arrow-\""
      }
    }
  };
  const updateConfigProviderLiteralVisitor = {
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
          path.traverse(updateConfigContentLiteralVisitor, path.node.init)
        }
        if (path.node.id.name === 'ConfigProvider') {
          path.traverse(updateConfigProviderLiteralVisitor, path.node.init)
        }
      },
    }
  };
}
