import appDirectives from '../../app.directives'

const TEST_ELEMENT = `
    <user-menu user="user"></user-menu>
`

describe('User Menu directive', () => {
  let sandbox, stubs, element, $scope

  function createStubs () {
    let popover = {
      show: sandbox.stub()
    }

    stubs = {
      popover,
      $ionicPopover: {
        fromTemplate: sandbox.stub().returns(popover)
      }
    }
  }
  before(() => {
    sandbox = sinon.sandbox.create()
  })

  beforeEach(angular.mock.module(appDirectives.name, ($provide) => {
    createStubs()
    $provide.value('$ionicPopover', stubs.$ionicPopover)
  }))

  beforeEach(inject(($rootScope, $compile) => {
    $scope = $rootScope.$new()

    // Inject default scope values
    $scope.user = {
      name: 'Mike Kelly',
      email: 'mike@nsa.gov'
    }

    element = $compile(TEST_ELEMENT)($scope)
    $scope.$apply()
  }))

  afterEach(() => {
    sandbox.reset()
  })

  it('should create popover for the template', () => {
    expect(stubs.$ionicPopover.fromTemplate).to.have.been.calledOnce
    expect(stubs.$ionicPopover.fromTemplate).to.have.been.calledWith(sinon.match.string)
  })

  it('should set the logged in user text', () => {
    expect(element.find('strong').text()).to.equal($scope.user.name)
  })

  it('should show the popover when the button is clicked', () => {
    element.find('button').triggerHandler('click')
    $scope.$apply()
    expect(stubs.popover.show).to.have.been.calledOnce
    expect(stubs.popover.show).to.have.been.calledWith(sinon.match.object)
  })
})
