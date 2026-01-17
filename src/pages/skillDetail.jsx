// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { ArrowLeft, Star, MapPin, Clock, Share2, Eye, EyeOff, MessageCircle, Phone, Mail } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

export default function SkillDetail(props) {
  const {
    toast
  } = useToast();
  const [skill, setSkill] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [loading, setLoading] = useState(true);
  const skillId = props.$w.page.dataset.params.id;

  // 模拟数据
  const mockSkills = {
    '1': {
      _id: '1',
      skillName: 'UI/UX 设计',
      category: '设计',
      description: '专业的移动端和Web端界面设计，擅长简约现代风格，提供完整的设计稿和切图。\n\n服务内容：\n• 移动端APP界面设计\n• Web网站设计\n• 图标和插画设计\n• 交互原型设计\n\n经验：\n• 3年UI/UX设计经验\n• 完成过50+个项目\n• 熟练使用Figma、Sketch、Adobe XD',
      price: 200,
      priceUnit: '小时',
      contactMethod: '微信',
      contactInfo: 'wx123456',
      location: '北京',
      publisherName: '小明',
      publisherId: 'user1',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 4.8,
      reviewCount: 23,
      createTime: '2026-01-15',
      viewCount: 156
    },
    '2': {
      _id: '2',
      skillName: 'Python 开发',
      category: '编程',
      description: '熟练掌握Python，擅长数据分析、爬虫开发、自动化脚本编写。\n\n服务内容：\n• 数据分析与可视化\n• 网络爬虫开发\n• 自动化脚本编写\n• Django/Flask Web开发\n\n经验：\n• 计算机专业在读\n• 2年Python开发经验\n• 完成过多个企业项目',
      price: 150,
      priceUnit: '小时',
      contactMethod: 'QQ',
      contactInfo: '123456789',
      location: '上海',
      publisherName: '小红',
      publisherId: 'user2',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 4.9,
      reviewCount: 31,
      createTime: '2026-01-14',
      viewCount: 203
    }
  };
  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      const data = mockSkills[skillId] || mockSkills['1'];
      setSkill(data);
      setLoading(false);
    }, 300);
  }, [skillId]);
  const handleBack = () => {
    props.$w.utils.navigateBack();
  };
  const handleShare = () => {
    toast({
      title: '分享成功',
      description: '链接已复制到剪贴板'
    });
  };
  const handleContact = () => {
    if (!showContact) {
      setShowContact(true);
      toast({
        title: '联系方式已显示',
        description: '请通过以下方式联系发布者'
      });
    }
  };
  const getContactIcon = method => {
    switch (method) {
      case '微信':
      case 'QQ':
        return MessageCircle;
      case '电话':
        return Phone;
      case '邮箱':
        return Mail;
      default:
        return MessageCircle;
    }
  };
  if (loading) {
    return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400 border-t-transparent"></div>
      </div>;
  }
  if (!skill) {
    return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50 flex items-center justify-center">
        <p className="text-gray-500">技能不存在</p>
      </div>;
  }
  const ContactIcon = getContactIcon(skill.contactMethod);
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50">
      {/* 顶部导航 */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <h1 className="text-lg font-bold text-gray-800">技能详情</h1>
            <button onClick={handleShare} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* 发布者信息 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
          <div className="flex items-center gap-4">
            <img src={skill.avatarUrl} alt={skill.publisherName} className="w-16 h-16 rounded-2xl object-cover" />
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-800">{skill.publisherName}</h2>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-700">{skill.rating}</span>
                  <span>({skill.reviewCount}条评价)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{skill.viewCount}次浏览</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技能信息 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{skill.skillName}</h1>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-medium">
                  {skill.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{skill.location}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{skill.createTime}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-500">
                ¥{skill.price}
              </div>
              <div className="text-gray-500 text-sm">/{skill.priceUnit}</div>
            </div>
          </div>

          <div className="border-t-2 border-gray-100 pt-4">
            <h3 className="font-bold text-gray-800 mb-3">技能描述</h3>
            <div className="text-gray-600 whitespace-pre-line leading-relaxed">
              {skill.description}
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
          <h3 className="font-bold text-gray-800 mb-4">联系方式</h3>
          {showContact ? <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <ContactIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{skill.contactMethod}</div>
                  <div className="text-lg font-bold text-gray-800">{skill.contactInfo}</div>
                </div>
                <button onClick={() => {
              navigator.clipboard.writeText(skill.contactInfo);
              toast({
                title: '复制成功',
                description: '联系方式已复制到剪贴板'
              });
            }} className="px-4 py-2 bg-white rounded-xl text-orange-500 font-medium hover:bg-orange-50 transition-colors">
                  复制
                </button>
              </div>
            </div> : <Button onClick={handleContact} className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 hover:shadow-lg hover:scale-105 transition-all text-lg">
              <EyeOff className="w-5 h-5 mr-2" />
              查看联系方式
            </Button>}
        </div>

        {/* 底部提示 */}
        <div className="text-center py-4 text-gray-400 text-sm">
          请通过正规渠道联系，注意保护个人信息安全
        </div>
      </div>
    </div>;
}