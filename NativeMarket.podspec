
  Pod::Spec.new do |s|
    s.name = 'NativeMarket'
    s.version = '0.0.1'
    s.summary = 'A native market plugin for linking to google play.'
    s.license = 'MIT'
    s.homepage = 'https://github.com/capacitor-community/native-market'
    s.author = 'Priyank Patel <priyank.patel@stackspace.ca>'
    s.source = { :git => 'https://github.com/capacitor-community/native-market', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end