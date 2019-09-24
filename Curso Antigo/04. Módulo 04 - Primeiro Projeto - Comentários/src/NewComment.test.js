import React from 'react'
import { shallow } from 'enzyme'
import NewComment from './NewComment'

describe('<New Comment />', () => {
    it('should handle changes in textarea', () => {
        const wrapper = shallow(<NewComment />)
        const event = { target: { value: 'test' } }
        wrapper.find('textarea').simulate('change', event )
        expect(wrapper.state().newComment).toBe('test')
    })
    it('should call sendComment on button click', () => {
        const sendComment = jest.fn()
        const wrapper = shallow(<NewComment sendComment={sendComment} />)
        const event = { target: { value: 'test' } }
        wrapper.find('textarea').simulate('change', event )
        wrapper.find('button').simulate('click')
        expect(sendComment).toBeCalledWith('test')
        expect(wrapper.state().newComment).toBe('')
        console.log(sendComment.mock.calls)
    })
})