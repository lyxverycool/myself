import * as React from 'react';
import AddPoety from './addPoety';
import PoetyList from './poetyList';
import { Button } from 'antd';

class Poety extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      show: 'list'
    }
    this.add = this.add.bind(this);
  }
  add() {
    this.setState({
      show: 'add'
    })
  }
  render() {
    return (
      <div className="list">
        <Button type="primary" onClick={this.add}>添加</Button>
        {
          this.state.show === 'list' ? <PoetyList /> : <AddPoety />
        }
      </div>
    )
  }
}


export default Poety;

