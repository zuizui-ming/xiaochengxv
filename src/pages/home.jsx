// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Search, MapPin, Star, Clock, ChevronRight } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

export default function Home(props) {
  const {
    toast
  } = useToast();
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [loading, setLoading] = useState(true);
  const categories = ['全部', '设计', '编程', '写作', '翻译', '视频', '音乐', '其他'];

  // 模拟数据
  const mockSkills = [{
    _id: '1',
    skillName: 'UI/UX 设计',
    category: '设计',
    description: '专业的移动端和Web端界面设计，擅长简约现代风格，提供完整的设计稿和切图。',
    price: 200,
    priceUnit: '小时',
    contactMethod: '微信',
    contactInfo: 'wx123456',
    location: '北京',
    publisherName: '小明',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 4.8,
    reviewCount: 23,
    createTime: '2026-01-15'
  }, {
    _id: '2',
    skillName: 'Python 开发',
    category: '编程',
    description: '熟练掌握Python，擅长数据分析、爬虫开发、自动化脚本编写。',
    price: 150,
    priceUnit: '小时',
    contactMethod: 'QQ',
    contactInfo: '123456789',
    location: '上海',
    publisherName: '小红',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 4.9,
    reviewCount: 31,
    createTime: '2026-01-14'
  }, {
    _id: '3',
    skillName: '英文翻译',
    category: '翻译',
    description: '英语专业八级，提供中英互译服务，擅长商务、科技、文学翻译。',
    price: 0.3,
    priceUnit: '字',
    contactMethod: '微信',
    contactInfo: 'wx789456',
    location: '广州',
    publisherName: '小李',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 4.7,
    reviewCount: 18,
    createTime: '2026-01-13'
  }, {
    _id: '4',
    skillName: '视频剪辑',
    category: '视频',
    description: '专业视频剪辑师，使用Pr、AE等软件，擅长短视频、宣传片制作。',
    price: 300,
    priceUnit: '小时',
    contactMethod: '电话',
    contactInfo: '13800138000',
    location: '深圳',
    publisherName: '小王',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 4.9,
    reviewCount: 42,
    createTime: '2026-01-12'
  }, {
    _id: '5',
    skillName: '文案写作',
    category: '写作',
    description: '创意文案写作，擅长品牌故事、产品描述、社交媒体内容创作。',
    price: 100,
    priceUnit: '篇',
    contactMethod: '邮箱',
    contactInfo: 'writer@example.com',
    location: '杭州',
    publisherName: '小张',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 4.6,
    reviewCount: 15,
    createTime: '2026-01-11'
  }, {
    _id: '6',
    skillName: '吉他教学',
    category: '音乐',
    description: '10年吉他演奏经验，提供零基础入门到进阶的吉他教学服务。',
    price: 80,
    priceUnit: '小时',
    contactMethod: '微信',
    contactInfo: 'guitar123',
    location: '成都',
    publisherName: '小陈',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    rating: 4.8,
    reviewCount: 27,
    createTime: '2026-01-10'
  }];
  useEffect(() => {
    // 模拟加载数据
    setTimeout(() => {
      setSkills(mockSkills);
      setLoading(false);
    }, 500);
  }, []);
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.skillName.toLowerCase().includes(searchTerm.toLowerCase()) || skill.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '全部' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const handleSkillClick = skillId => {
    props.$w.utils.navigateTo({
      pageId: 'skillDetail',
      params: {
        id: skillId
      }
    });
  };
  const handlePublish = () => {
    props.$w.utils.navigateTo({
      pageId: 'publishSkill',
      params: {}
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-teal-50">
      {/* 顶部搜索栏 */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="text" placeholder="搜索技能..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-orange-300 focus:bg-white transition-all outline-none" />
            </div>
            <button onClick={handlePublish} className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl font-medium hover:shadow-lg hover:scale-105 transition-all">
              发布
            </button>
          </div>

          {/* 分类标签 */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-orange-50'}`}>
                {category}
              </button>)}
          </div>
        </div>
      </div>

      {/* 技能列表 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {loading ? <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-400 border-t-transparent"></div>
          </div> : filteredSkills.length === 0 ? <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无相关技能</p>
          </div> : <div className="space-y-4">
            {filteredSkills.map(skill => <div key={skill._id} onClick={() => handleSkillClick(skill._id)} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-orange-200">
                <div className="flex gap-4">
                  {/* 头像 */}
                  <img src={skill.avatarUrl} alt={skill.publisherName} className="w-16 h-16 rounded-2xl object-cover" />

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{skill.skillName}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full font-medium">
                            {skill.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {skill.location}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{skill.description}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold text-gray-800">{skill.rating}</span>
                          <span className="text-gray-400 text-sm">({skill.reviewCount})</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Clock className="w-3.5 h-3.5" />
                          {skill.createTime}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-orange-500">
                          ¥{skill.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-1">/{skill.priceUnit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>}
      </div>

      {/* 底部导航占位 */}
      <div className="h-20"></div>
    </div>;
}