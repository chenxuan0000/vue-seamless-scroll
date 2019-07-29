import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import myClass from '../src/components/myClass.vue'

describe('无缝滚动组件配置参数测试', () => {
	it('测试limitMoveNum（开启无缝滚动的数据量）配置是否生效！', () => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				data: [1, 2, 3, 4, 5],
				classOption: {
					limitMoveNum: 6
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
		expect(wrapper.vm.isHover).to.eql(false)
		const main = wrapper.find({
			ref: 'realBox'
		})
		main.trigger('mouseenter')
		expect(wrapper.vm.isHover).to.eql(true)
	})

	it('测试hoverStop（是否启用鼠标hover控制）配置是否生效！', () => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				data: [1, 2, 3, 4, 5, 6, 7]
			}
		})
		expect(wrapper.vm.isHover).to.eql(false)
		const main = wrapper.find({
			ref: 'realBox'
		})
		main.trigger('mouseenter')
		expect(wrapper.vm.isHover).to.eql(true)
	})

	it('测试navigation（左右滚动按钮开启状态）是否自动禁用了自动滚动以及是否初始化了相关的配置！', done => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				data: [1, 2, 3, 4, 5, 6, 7],
				classOption: {
					direction: 2
				}
			}
		})

		expect(wrapper.vm.autoPlay).to.eql(true)
		expect(wrapper.vm.ease).to.eql(undefined)
		expect(wrapper.vm.delay).to.eql(0)
		wrapper.setProps({
			classOption: {
				direction: 2,
				navigation: true
			}
		})

		wrapper.vm.$nextTick(() => {
			expect(wrapper.vm.autoPlay).to.eql(false)
			expect(wrapper.vm.ease).to.eql('linear')
			expect(wrapper.vm.delay).not.eql(0)
			done()
		})
	})

	it('测试autoPlay（自动开启滚动）是否正确重置了其他属性！', done => {
		const wrapper = shallowMount(myClass, {
			propsData: {
				data: [1, 2, 3, 4, 5, 6, 7]
			}
		})

		expect(wrapper.vm.hoverStopSwitch).to.eql(true)
		expect(wrapper.vm.delay).to.eql(0)
		wrapper.setProps({
			classOption: {
				autoPlay: false
			}
		})

		wrapper.vm.$nextTick(() => {
			expect(wrapper.vm.hoverStopSwitch).to.eql(false)
			done()
		})
	})
})
