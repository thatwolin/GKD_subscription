import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="tv_tiaoguo" || vid="iv_tg_ad"]',
          exampleUrls: 'https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf',
          snapshotUrls: [
            'https://i.gkd.li/i/17082872',
            'https://i.gkd.li/i/17082897',
            'https://i.gkd.li/i/17082899',
            'https://i.gkd.li/i/13798686',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-首页-推荐-卡片广告',
      rules: [
        {
          activityIds: 'com.donews.nga.activitys.MainActivity',
          matches: '[id="gov.pianzong.androidnga:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/12482727',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-话题-帖子列表广告',
      desc: '点击卡片x按钮关闭广告',
      activityIds:
        'gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity',
      rules: [
        {
          key: 1,
          matches: 'Image[text="ams_icon_single_close"]',
          snapshotUrls: 'https://i.gkd.li/i/12655805',
        },
        {
          key: 2,
          matches:
            'TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/i/12706140',
        },
        {
          key: 3,
          matches:
            '[text="广告"] - [id="gov.pianzong.androidnga:id/iv_information_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/13303236',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-社区-顶部广告',
      rules: [
        {
          activityIds: 'com.donews.nga.activitys.MainActivity',
          matches: '[id="gov.pianzong.androidnga:id/iv_close_community_ad"]',
          snapshotUrls: ['https://i.gkd.li/i/12706132'],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.donews.nga.activitys.MainActivity',
          matches:
            '[vid="iv_homedialog_close" || vid="iv_close"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af',
          snapshotUrls: [
            'https://i.gkd.li/i/14126934',
            'https://i.gkd.li/i/21158044',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '局部广告-评论区底部广告',
      desc: '点击关闭',
      rules: [
        {
          position: {
            left: 'width * 0.9629',
            top: 'width * 0.0472',
          },
          activityIds:
            'gov.pianzong.androidnga.activity.forumdetail.ArticleDetailActivity',
          matches: '[id="advertisementBottom"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/589a4441-4be0-4ebc-90f5-d0dc5cfc84ff',
          snapshotUrls: 'https://i.gkd.li/i/17348441',
          excludeSnapshotUrls: 'https://i.gkd.li/i/17348415', // visibleToUser=true 防止误触
        },
      ],
    },
  ],
});
