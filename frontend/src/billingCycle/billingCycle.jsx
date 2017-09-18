import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import ContentHeader from '../commom/template/contentHeader'
import Content from '../commom/template/content'
import Row from '../commom/layout/row'
import Tabs from '../commom/tab/tabs'
import TabsHeader from '../commom/tab/tabsHeader'
import TabsContent from '../commom/tab/tabsContent'
import TabHeader from '../commom/tab/tabHeader'
import TabContent from '../commom/tab/tabContent'
import { init, create, update, remove } from './billingCycleActions'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {
    
    componentWillMount() {
        this.props.init()
    }
    
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />    
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} 
                                    submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)