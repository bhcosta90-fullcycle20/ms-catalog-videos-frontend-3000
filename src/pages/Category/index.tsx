import { FunctionComponent } from 'react';
import Page from './../../components/Page'

interface DefaultProps {

}

const Default: FunctionComponent<DefaultProps> = () => {
    return (<>
        <Page title={'Lista de categoria'}></Page>
    </>);
}

export default Default;