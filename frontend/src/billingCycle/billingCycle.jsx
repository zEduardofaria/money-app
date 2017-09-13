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


class BillingCycle extends Component {
    render() {
        return (
            <Row>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                        </TabsHeader>
                        <TabsContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </Row>
        )
    }
}

export default BillingCycle