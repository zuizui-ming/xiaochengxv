// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Settings, LogOut, Edit2, Trash2, Plus, Star, MapPin, Calendar } from 'lucide-react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';

export default function My(props) {
  const {
    toast
  } = useToast();
  const [user, setUser] = useState(null);
  const [mySkills, setMySkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // 模拟用户数据
  const mockUser = {
    name: '张同学',
    nickName: '小张',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    type: 'student',
    stats: {
      publishedSkills: 3,
      totalViews: 456,
      avgRating: 4.7,
      totalOrders: 12
    }
  };

  // 模拟发布的技能
  const mockMySkills = [{
    _id: '1',
    skillName: 'UI/UX 设计',
    category: '设计',
    description: '专业的移动端和Web端界面设计',
    price: 200,
    priceUnit: '小时',
    location: '北京',
    rating: 4.8,
    reviewCount: 23,
    viewCount: 156,
    createTime: '2026-01-15',
    status: 'active'
  }, {
    _id: '2',
    skillName: 'Python 开发',
    category: '编程',
    description: '熟练掌握Python，擅长数据分析',
    price: 150,
    priceUnit: '小时',
    location: '上海',
    rating: 4.9,
    reviewCount: 31,
    viewCount: 203,
    createTime: '2026-01-14',
    status: 'active'
  }, {
    _id: '3',
    skillName: '英文翻译',
    category: '翻译',
    description: '英语专业八级，提供中英互译服务',
    price: 0.3,
    priceUnit: '字',
    location: '广州',
    rating: 4.7,
    reviewCount: 18,
    viewCount: 89,
    createTime: '2026-01-13',
    status: 'active'
  }];
  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setUser(mockUser);
      setMySkills(mockMySkills);
      setLoading(false);
    }, 300);
  }, []);
  const handlePublish = () => {
    props.$w.utils.navigateTo({
      pageId: 'publishSkill',
      params: {}
    });
  };
  const handleEditSkill = skillId => {
    toast({
      title: '编辑功能',
      description: '编辑功能开发中...'
    });
  };
  const handleDeleteSkill = async skillId => {
    if (window.confirm('确定要删除这个技能吗？')) {
      try {
        // 模拟删除
        await new Promise(resolve => setTimeout(resolve, 500));
        setMySkills(mySkills.filter(skill => skill._id !== skillId));
        toast({
          title: '删除成功',
          description: '技能已删除'
        });
      } catch (error) {
        toast({
          title: '删除失败',
          description: error.message || '请稍后重试',
          variant: 'destructive'
        });
      }
    }
  };
  const handleLogout = () => {
    if (window.confirm('确定要退出登录吗？')) {
      toast({
        title: '已退出登录'
      });
    }
  };
  if (loading) {
    return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400 border-t-transparent"></div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50">
      {/* 用户信息卡片 */}
      <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <img src={user.avatarUrl} alt={user.name} className="w-20 h-20 rounded-3xl object-cover border-4 border-white/30 shadow-lg" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">{user.nickName || user.name}</h1>
              <p className="text-white/80 text-sm">{user.type === 'student' ? '大学生' : '企业工作者'}</p>
            </div>
            <button onClick={() => toast({
            title: '设置功能开发中...'
          })} className="p-3 bg-white/20 rounded-2xl hover:bg-white/30 transition-colors">
              <Settings className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-4 gap-3 mt-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.publishedSkills}</div>
              <div className="text-white/80 text-xs mt-1">发布技能</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.totalViews}</div>
              <div className="text-white/80 text-xs mt-1">总浏览</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.avgRating}</div>
              <div className="text-white/80 text-xs mt-1">平均评分</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{user.stats.totalOrders}</div>
              <div className="text-white/80 text-xs mt-1">成交订单</div>
            </div>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* 发布按钮 */}
        <Button onClick={handlePublish} className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 hover:shadow-lg hover:scale-105 transition-all text-lg mb-6">
          <Plus className="w-5 h-5 mr-2" />
          发布新技能
        </Button>

        {/* 我的技能列表 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">我的技能</h2>
          {mySkills.length === 0 ? <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <p className="text-gray-500 mb-4">还没有发布任何技能</p>
              <Button onClick={handlePublish} className="bg-gradient-to-r from-orange-400 to-orange-500">
                立即发布
              </Button>
            </div> : <div className="space-y-4">
              {mySkills.map(skill => <div key={skill._id} className="bg-white rounded-3xl p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.skillName}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full font-medium">
                          {skill.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {skill.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {skill.createTime}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-500">
                        ¥{skill.price}
                      </div>
                      <div className="text-gray-500 text-sm">/{skill.priceUnit}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{skill.description}</p>

                  <div className="flex items-center justify-between pt-3 border-t-2 border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-700">{skill.rating}</span>
                        <span>({skill.reviewCount})</span>
                      </div>
                      <span>浏览 {skill.viewCount}</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditSkill(skill._id)} className="p-2 hover:bg-orange-50 rounded-xl transition-colors">
                        <Edit2 className="w-4 h-4 text-orange-500" />
                      </button>
                      <button onClick={() => handleDeleteSkill(skill._id)} className="p-2 hover:bg-red-50 rounded-xl transition-colors">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>}
        </div>

        {/* 退出登录 */}
        <Button onClick={handleLogout} variant="outline" className="w-full h-12 rounded-2xl border-2 border-red-200 text-red-500 hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-2" />
          退出登录
        </Button>
      </div>

      {/* 底部导航占位 */}
      <div className="h-20"></div>
    </div>;
}