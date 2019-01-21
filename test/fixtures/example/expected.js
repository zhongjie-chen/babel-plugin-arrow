const createReactContext = () => {}

const ConfigContext = createReactContext({
  // We provide a default function for Context without provider
  getPrefixCls: (suffixCls, customizePrefixCls) => {
      if (customizePrefixCls)
          return customizePrefixCls;
      return `arrow-${suffixCls}`;
  },
  renderEmpty: defaultRenderEmpty,
});
class ConfigProvider extends React.Component { 
constructor() {
    super(...arguments);
      this.getPrefixCls = (suffixCls, customizePrefixCls) => {
            const { prefixCls = 'arrow' } = this.props;
            if (customizePrefixCls)
                return customizePrefixCls;
            return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
        };
  }
}