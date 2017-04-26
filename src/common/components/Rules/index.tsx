// tslint:disable:no-any
import rulesMd from './rulesMd'
import Markdown from 'react-markdown'
import glamorous from 'glamorous'
import { Helmet } from 'react-helmet'
import { FormattedMessage, injectIntl, InjectedIntl, defineMessages } from 'react-intl'

const messages = defineMessages({
  rules: {
    id: 'rules.rulesText',
    defaultMessage: rulesMd,
  },
  rulesTitle: {
    id: 'rules.title',
    defaultMessage: 'Rules - The Black Cat - Online multiplayer card game',
  },
})

const Wrapper = glamorous.div({
  padding: '10px 30px',
})

const Rules = ({ intl }: { intl: InjectedIntl }) => (
  <Wrapper>
    <Helmet>
      <title>{intl.formatMessage(messages.rulesTitle)}</title>
    </Helmet>
    <h1>
      <FormattedMessage
        id="rules.header"
        defaultMessage="Game rules"
      />
    </h1>
    <Markdown source={intl.formatMessage(messages.rules)} />
  </Wrapper>
)

export default injectIntl(Rules)