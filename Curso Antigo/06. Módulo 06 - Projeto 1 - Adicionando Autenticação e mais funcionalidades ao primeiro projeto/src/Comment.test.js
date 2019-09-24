import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should render text', () => {
    const c = {
        comment: 'Teste'
    }
    const wrapper = render(<Comment c={c} />)
    //console.log(wrapper.text())
    expect(wrapper.text()).toBe('Comentário: Teste')
})

it('should render empty', () => {
    const wrapper = render(<Comment />)
    expect(wrapper.text()).toBe('Comentário: vazio')
})