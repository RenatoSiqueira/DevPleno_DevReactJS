import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
    it('Should render Comments', () => {
        const comments = {
            a: { id: 'a', comment: 'Comment 1' },
            b: { id: 'b', comment: 'Comment 2' },
        }
        const wrapper = shallow(<Comments comments={comments} />)
        //console.log(wrapper.find(Comment).length)
        expect(wrapper.find(Comment).length).toBe(2)
        //console.log(wrapper.find(Comment).get(0))
        expect(wrapper.find(Comment).get(0).props.c).toBe(comments.a)
        expect(wrapper.find(Comment).get(1).props.c).toBe(comments.b)

        expect(wrapper.find(Comment).get(0).key).toBe(comments.a.id)
        expect(wrapper.find(Comment).get(1).key).toBe('b')        
    })

    it('should work with no comments', () => {
        const comments = {}
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.find(Comment).length).toBe(0)
    })
})