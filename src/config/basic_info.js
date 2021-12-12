const Basic_Info={
    userId:"",  // 唯一身份id
    avatarId:'', // 头像id
    nickName:'', // 昵称
    isSurvival:true, // 是否存活 true为存活 false为死亡
    isUndercover:0, // 是否是卧底 1是平常玩家 2是卧底 0是未分配任务
    votes:0, // 票数
    isVote:false, // 是否投票 
    isPreparation:false, // 是否准备，false为未准备 true未准备
    winningSide:0, // 胜利方 0未产生胜利者 1是平常玩家胜利 2是卧底
    topic:"", // 题目 服务端生成
    round:0, // 回合数
}

export default Basic_Info