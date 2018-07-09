

/*
const artifactRepo = new ArtifactRepository();

const liveConfigRepo = new ConfigurationRepository({
  ui: { apiUrl: 'api.live.example.com' },
  api: { dbUser: 'live_api', dbPass: 'pa55word', dbEndpoint: 'db.live.example.local' },
})

const liveEnv = new Environment('live', artifactRepo, liveConfigRepo, null)
const livePipe = new ReleasePipe(liveEnv)

const demoConfigRepo = new ConfigurationRepository({
  ui: { apiUrl: 'api.demo.example.com' },
  api: { dbUser: 'demo_api', dbPass: 'h4x0r', dbEndpoint: 'db.demo.example.local' },
})
const demoEnv = new Environment('demo', artifactRepo, demoConfigRepo, null)
const demoPipe = new ReleasePipe(demoEnv)

const qaConfig = new ConfigurationRepository({
  ui: { apiUrl: 'api.qa.example.com' },
  api: { dbUser: 'qa_api', dbPass: 'n00b', dbEndpoint: 'db.qa.example.local' },
})
const qaEnv = new Environment('qa', artifactRepo, qaConfigRepo, [livePipe, demoPipe])
const qaPipe = new ReleasePipe(qaPipe)

const ciConfigRepo = new ConfigurationRepository({
  ui: { apiUrl: 'api.ci.example.com' },
  api: { dbUser: 'ci_api', dbPass: '1337', dbEndpoint: 'db.ci.example.local' },
})
const ciEnv = new Environment('ci', artifactRepo, ciConfigRepo, [qaEnv])
const ciPipe = new ReleasePipe(ciEnv)
*/