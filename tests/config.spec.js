import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import myClass from '../src/components/myClass.vue'

describe('无缝滚动组件', () => {
	it('测试limitMoveNum（开启无缝滚动的数据量）配置是否生效！', () => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				classOption: {
					limitMoveNum: 6,
					data: [1, 2, 3, 4, 5]
				}
			}
		})
		expect(wrapper.vm.scrollSwitch).to.eql(false)
		wrapper.setProps({ data: [1, 2, 3, 4, 5, 6, 7] })
		expect(wrapper.vm.scrollSwitch).to.eql(true)
	})

	it('测试hoverStop（是否启用鼠标hover控制）配置是否生效！', () => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				data: [1, 2, 3, 4, 5, 6, 7]
			}
		})
		console.log(`start :${wrapper.vm.isHover}`)
		expect(wrapper.vm.isHover).to.eql(false)
		const main = wrapper.find({
			ref: 'realBox'
		})
		main.trigger('mouseenter')
		console.log(`end :${wrapper.vm.isHover}`)
		expect(wrapper.vm.isHover).to.eql(true)
	})

	it('测试hoverStop（是否启用鼠标hover控制）配置是否生效！', () => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				data: [1, 2, 3, 4, 5, 6, 7]
			}
		})
		console.log(`start :${wrapper.vm.isHover}`)
		expect(wrapper.vm.isHover).to.eql(false)
		const main = wrapper.find({
			ref: 'realBox'
		})
		main.trigger('mouseenter')
		console.log(`end :${wrapper.vm.isHover}`)
		expect(wrapper.vm.isHover).to.eql(true)
	})
})
