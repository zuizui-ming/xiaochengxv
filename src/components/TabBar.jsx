// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Home, PlusCircle, User } from 'lucide-react';

export default function TabBar({
  activeTab,
  onTabChange
}) {
  const tabs = [{
    id: 'home',
    label: '首页',
    icon: Home,
    pageId: 'home'
  }, {
    id: 'publish',
    label: '发布',
    icon: PlusCircle,
    pageId: 'publishSkill'
  }, {
    id: 'my',
    label: '我的',
    icon: User,
    pageId: 'my'
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return <button key={tab.id} onClick={() => onTabChange(tab.pageId)} className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl transition-all ${isActive ? 'text-orange-500' : 'text-gray-400 hover:text-gray-600'}`}>
                <Icon className={`w-6 h-6 ${isActive ? 'fill-orange-500' : ''}`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>;
        })}
        </div>
      </div>
    </div>;
}