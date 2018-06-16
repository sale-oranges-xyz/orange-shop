/**
 * 公告栏模块
 */
import PromiseUtil from '@/utils/PromiseUtil';

export default {
  getNotice() {
    const content = '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力';
    return PromiseUtil.create(content);
  }
};
