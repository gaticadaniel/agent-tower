player.onChat("tower", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 4; index++) {
            agent.setItem(SANDSTONE, 16, 1)
            agent.move(FORWARD, 4)
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
    }
})
