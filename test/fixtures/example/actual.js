const createReactContext = () => {}

const ConfigContext = createReactContext({
  // We provide a default function for Context without provider
  getPrefixCls: (suffixCls, customizePrefixCls) => {
      if (customizePrefixCls)
          return customizePrefixCls;
      return `ant-${suffixCls}`;
  },
  renderEmpty: defaultRenderEmpty,
});
class ConfigProvider extends React.Component { 
constructor() {
    super(...arguments);
      this.getPrefixCls = (suffixCls, customizePrefixCls) => {
            const { prefixCls = 'ant' } = this.props;
            if (customizePrefixCls)
                return customizePrefixCls;
            return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
        };
  }
}