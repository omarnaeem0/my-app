import * as React from 'react';
import { RenderProp } from '../hoc/RenderProp';

const Title = () => {
  const selector = (store: any) => store.title;
  return (
    <div>
      <div>With no selector</div>
      <RenderProp>
        {(title: string) =>
          <div>{title}</div>
        }
      </RenderProp>

      
      <div>With selector</div>
      <RenderProp selector={selector}>
        {(title: string) =>
          <div>{title}</div>
        }
      </RenderProp>
    </div>

  );
}

export default Title;