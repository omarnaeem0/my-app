export const RenderProp = (props: { selector?: (store: any) => any }) => {

  const store = {
    title: 'title',
    title1: 'title1'
  };

  return !props.selector ? 'no selector passed' : props.selector(store);
};