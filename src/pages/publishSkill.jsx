// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { MapPin, Phone, Mail, MessageCircle, X, Check } from 'lucide-react';
// @ts-ignore;
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea, Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, useToast } from '@/components/ui';

import { useForm } from 'react-hook-form';
export default function PublishSkill(props) {
  const {
    toast
  } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const form = useForm({
    defaultValues: {
      skillName: '',
      category: '',
      description: '',
      price: '',
      priceUnit: '小时',
      contactMethod: '微信',
      contactInfo: '',
      location: ''
    }
  });
  const categories = ['设计', '编程', '写作', '翻译', '视频', '音乐', '其他'];
  const priceUnits = ['小时', '次', '篇', '字', '项目'];
  const contactMethods = [{
    value: '微信',
    icon: MessageCircle,
    label: '微信'
  }, {
    value: 'QQ',
    icon: MessageCircle,
    label: 'QQ'
  }, {
    value: '电话',
    icon: Phone,
    label: '电话'
  }, {
    value: '邮箱',
    icon: Mail,
    label: '邮箱'
  }];
  const onSubmit = async data => {
    setSubmitting(true);
    try {
      // 模拟提交
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: '发布成功！',
        description: '您的技能已成功发布',
        variant: 'default'
      });

      // 返回首页
      setTimeout(() => {
        props.$w.utils.navigateTo({
          pageId: 'home',
          params: {}
        });
      }, 1500);
    } catch (error) {
      toast({
        title: '发布失败',
        description: error.message || '请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };
  const handleCancel = () => {
    props.$w.utils.navigateBack();
  };
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleCancel} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-xl font-bold text-gray-800">发布技能</h1>
            <div className="w-10" />
          </div>
        </div>
      </div>

      {/* 表单内容 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 技能名称 */}
            <FormField control={form.control} name="skillName" rules={{
            required: '请输入技能名称'
          }} render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base font-semibold text-gray-700">技能名称</FormLabel>
                  <FormControl>
                    <Input placeholder="例如：UI/UX 设计、Python 开发" className="h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            {/* 技能分类 */}
            <FormField control={form.control} name="category" rules={{
            required: '请选择技能分类'
          }} render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base font-semibold text-gray-700">技能分类</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400">
                        <SelectValue placeholder="选择分类" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map(cat => <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>} />

            {/* 技能描述 */}
            <FormField control={form.control} name="description" rules={{
            required: '请输入技能描述',
            minLength: {
              value: 10,
              message: '描述至少10个字'
            }
          }} render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base font-semibold text-gray-700">技能描述</FormLabel>
                  <FormControl>
                    <Textarea placeholder="详细描述您的技能、经验和服务内容..." className="min-h-32 rounded-2xl border-2 border-gray-200 focus:border-orange-400 resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            {/* 价格和单位 */}
            <div className="grid grid-cols-2 gap-4">
              <FormField control={form.control} name="price" rules={{
              required: '请输入价格',
              min: {
                value: 0,
                message: '价格不能为负数'
              }
            }} render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-700">价格</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0" className="h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>} />
              <FormField control={form.control} name="priceUnit" rules={{
              required: '请选择计价单位'
            }} render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-base font-semibold text-gray-700">计价单位</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {priceUnits.map(unit => <SelectItem key={unit} value={unit}>
                            {unit}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>} />
            </div>

            {/* 联系方式 */}
            <FormField control={form.control} name="contactMethod" rules={{
            required: '请选择联系方式'
          }} render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base font-semibold text-gray-700">联系方式</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {contactMethods.map(method => {
                  const Icon = method.icon;
                  return <SelectItem key={method.value} value={method.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              {method.label}
                            </div>
                          </SelectItem>;
                })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>} />

            <FormField control={form.control} name="contactInfo" rules={{
            required: '请输入联系信息'
          }} render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base font-semibold text-gray-700">联系信息</FormLabel>
                  <FormControl>
                    <Input placeholder="请输入您的微信号/QQ号/电话/邮箱" className="h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            {/* 所在地 */}
            <FormField control={form.control} name="location" rules={{
            required: '请输入所在地'
          }} render={({
            field
          }) => <FormItem>
                  <FormLabel className="text-base font-semibold text-gray-700">所在地</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input placeholder="例如：北京市海淀区" className="pl-10 h-12 rounded-2xl border-2 border-gray-200 focus:border-orange-400" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            {/* 提交按钮 */}
            <div className="flex gap-4 pt-4">
              <Button type="button" onClick={handleCancel} variant="outline" className="flex-1 h-12 rounded-2xl border-2 border-gray-300 text-gray-600 hover:bg-gray-50">
                取消
              </Button>
              <Button type="submit" disabled={submitting} className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 hover:shadow-lg hover:scale-105 transition-all">
                {submitting ? <span className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    发布中...
                  </span> : <span className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    立即发布
                  </span>}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>;
}