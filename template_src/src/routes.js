import Home from './assets/vue/demo_pages/home.vue';
import PanelLeft from './assets/vue/demo_pages/panel-left.vue';
import PanelRight from './assets/vue/demo_pages/panel-right.vue';
import About from './assets/vue/demo_pages/about.vue';

import Accordion from './assets/vue/demo_pages/accordion.vue';
import ActionSheet from './assets/vue/demo_pages/action-sheet.vue';
import Autocomplete from './assets/vue/demo_pages/autocomplete.vue';
import Badge from './assets/vue/demo_pages/badge.vue';
import Buttons from './assets/vue/demo_pages/buttons.vue';
import Calendar from './assets/vue/demo_pages/calendar.vue';
import CalendarPage from './assets/vue/demo_pages/calendar-page.vue';
import Cards from './assets/vue/demo_pages/cards.vue';
import Checkbox from './assets/vue/demo_pages/checkbox.vue';
import Chips from './assets/vue/demo_pages/chips.vue';
import ContactsList from './assets/vue/demo_pages/contacts-list.vue';
import ContentBlock from './assets/vue/demo_pages/content-block.vue';
import DataTable from './assets/vue/demo_pages/data-table.vue';
import Dialog from './assets/vue/demo_pages/dialog.vue';
import Fab from './assets/vue/demo_pages/fab.vue';
import FabMorph from './assets/vue/demo_pages/fab-morph.vue';
import FormStorage from './assets/vue/demo_pages/form-storage.vue';
import Grid from './assets/vue/demo_pages/grid.vue';
import Icons from './assets/vue/demo_pages/icons.vue';
import InfiniteScroll from './assets/vue/demo_pages/infinite-scroll.vue';
import Inputs from './assets/vue/demo_pages/inputs.vue';
import LazyLoad from './assets/vue/demo_pages/lazy-load.vue';
import List from './assets/vue/demo_pages/list.vue';
import LoginScreen from './assets/vue/demo_pages/login-screen.vue';
import LoginScreenPage from './assets/vue/demo_pages/login-screen-page.vue';
import Messages from './assets/vue/demo_pages/messages.vue';
import Navbar from './assets/vue/demo_pages/navbar.vue';
import NavbarHideScroll from './assets/vue/demo_pages/navbar-hide-scroll.vue';
import Notifications from './assets/vue/demo_pages/notifications.vue';
import Panel from './assets/vue/demo_pages/panel.vue';
import PhotoBrowser from './assets/vue/demo_pages/photo-browser.vue';
import Picker from './assets/vue/demo_pages/picker.vue';
import Popup from './assets/vue/demo_pages/popup.vue';
import Popover from './assets/vue/demo_pages/popover.vue';
import Preloader from './assets/vue/demo_pages/preloader.vue';
import Progressbar from './assets/vue/demo_pages/progressbar.vue';
import PullToRefresh from './assets/vue/demo_pages/pull-to-refresh.vue';
import Radio from './assets/vue/demo_pages/radio.vue';
import Range from './assets/vue/demo_pages/range.vue';
import Searchbar from './assets/vue/demo_pages/searchbar.vue';
import SearchbarExpandable from './assets/vue/demo_pages/searchbar-expandable.vue';
import SheetModal from './assets/vue/demo_pages/sheet-modal.vue';
import SmartSelect from './assets/vue/demo_pages/smart-select.vue';
import Sortable from './assets/vue/demo_pages/sortable.vue';
import Statusbar from './assets/vue/demo_pages/statusbar.vue';
import Subnavbar from './assets/vue/demo_pages/subnavbar.vue';
import SubnavbarTitle from './assets/vue/demo_pages/subnavbar-title.vue';
import Swiper from './assets/vue/demo_pages/swiper.vue';
import SwiperHorizontal from './assets/vue/demo_pages/swiper-horizontal.vue';
import SwiperVertical from './assets/vue/demo_pages/swiper-vertical.vue';
import SwiperSpaceBetween from './assets/vue/demo_pages/swiper-space-between.vue';
import SwiperMultiple from './assets/vue/demo_pages/swiper-multiple.vue';
import SwiperNested from './assets/vue/demo_pages/swiper-nested.vue';
import SwiperLoop from './assets/vue/demo_pages/swiper-loop.vue';
import Swiper3dCube from './assets/vue/demo_pages/swiper-3d-cube.vue';
import Swiper3dCoverflow from './assets/vue/demo_pages/swiper-3d-coverflow.vue';
import Swiper3dFlip from './assets/vue/demo_pages/swiper-3d-flip.vue';
import SwiperFade from './assets/vue/demo_pages/swiper-fade.vue';
import SwiperScrollbar from './assets/vue/demo_pages/swiper-scrollbar.vue';
import SwiperGallery from './assets/vue/demo_pages/swiper-gallery.vue';
import SwiperCustomControls from './assets/vue/demo_pages/swiper-custom-controls.vue';
import SwiperParallax from './assets/vue/demo_pages/swiper-parallax.vue';
import SwiperLazy from './assets/vue/demo_pages/swiper-lazy.vue';
import SwiperPaginationProgress from './assets/vue/demo_pages/swiper-pagination-progress.vue';
import SwiperPaginationFraction from './assets/vue/demo_pages/swiper-pagination-fraction.vue';
import SwiperZoom from './assets/vue/demo_pages/swiper-zoom.vue';
import Swipeout from './assets/vue/demo_pages/swipeout.vue';
import Tabs from './assets/vue/demo_pages/tabs.vue';
import TabsStatic from './assets/vue/demo_pages/tabs-static.vue';
import TabsAnimated from './assets/vue/demo_pages/tabs-animated.vue';
import TabsSwipeable from './assets/vue/demo_pages/tabs-swipeable.vue';
import TabsRoutable from './assets/vue/demo_pages/tabs-routable.vue';
import Toast from './assets/vue/demo_pages/toast.vue';
import Toggle from './assets/vue/demo_pages/toggle.vue';
import ToolbarTabbar from './assets/vue/demo_pages/toolbar-tabbar.vue';
import Tabbar from './assets/vue/demo_pages/tabbar.vue';
import TabbarLabels from './assets/vue/demo_pages/tabbar-labels.vue';
import TabbarScrollable from './assets/vue/demo_pages/tabbar-scrollable.vue';
import ToolbarHideScroll from './assets/vue/demo_pages/toolbar-hide-scroll.vue';
import Timeline from './assets/vue/demo_pages/timeline.vue';
import TimelineVertical from './assets/vue/demo_pages/timeline-vertical.vue';
import TimelineHorizontal from './assets/vue/demo_pages/timeline-horizontal.vue';
import TimelineHorizontalCalendar from './assets/vue/demo_pages/timeline-horizontal-calendar.vue';
import VirtualList from './assets/vue/demo_pages/virtual-list.vue';
import ColorThemes from './assets/vue/demo_pages/color-themes.vue';

// Pages
export default [
  // Index page
  {
    path: '/',
    component: Home,
  },
  // About page
  {
    path: '/about/',
    component: About,
  },
  // Left Panel
  {
    path: '/panel-left/',
    component: PanelLeft,
  },
  // Right Panel
  {
    path: '/panel-right/',
    component: PanelRight,
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="ios-only">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    path: '/panel-right-2/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-inner sliding">
            <div class="left">
              <a href="#" class="link back">
                <i class="icon icon-back"></i>
                <span class="ios-only">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },

  // Components
  {
    path: '/accordion/',
    component: Accordion,
  },
  {
    path: '/action-sheet/',
    component: ActionSheet,
  },
  {
    path: '/autocomplete/',
    component: Autocomplete,
  },
  {
    path: '/badge/',
    component: Badge,
  },
  {
    path: '/buttons/',
    component: Buttons,
  },
  {
    path: '/calendar/',
    component: Calendar,
  },
  {
    path: '/calendar-page/',
    component: CalendarPage,
  },
  {
    path: '/cards/',
    component: Cards,
  },
  {
    path: '/checkbox/',
    component: Checkbox,
  },
  {
    path: '/chips/',
    component: Chips,
  },
  {
    path: '/contacts-list/',
    component: ContactsList,
  },
  {
    path: '/content-block/',
    component: ContentBlock,
  },
  {
    path: '/data-table/',
    component: DataTable,
  },
  {
    path: '/dialog/',
    component: Dialog,
  },
  {
    path: '/fab/',
    component: Fab,
  },
  {
    path: '/fab-morph/',
    component: FabMorph,
  },
  {
    path: '/form-storage/',
    component: FormStorage,
  },
  {
    path: '/grid/',
    component: Grid,
  },
  {
    path: '/icons/',
    component: Icons,
  },
  {
    path: '/infinite-scroll/',
    component: InfiniteScroll,
  },
  {
    path: '/inputs/',
    component: Inputs,
  },
  {
    path: '/lazy-load/',
    component: LazyLoad,
  },
  {
    path: '/list/',
    component: List,
  },
  {
    path: '/login-screen/',
    component: LoginScreen,
  },
  {
    path: '/login-screen-page/',
    component: LoginScreenPage,
  },
  {
    path: '/messages/',
    component: Messages,
  },
  {
    path: '/navbar/',
    component: Navbar,
  },
  {
    path: '/navbar-hide-scroll/',
    component: NavbarHideScroll,
  },
  {
    path: '/notifications/',
    component: Notifications,
  },
  {
    path: '/panel/',
    component: Panel,
  },
  {
    path: '/photo-browser/',
    component: PhotoBrowser,
  },
  {
    path: '/picker/',
    component: Picker,
  },
  {
    path: '/popup/',
    component: Popup,
  },
  {
    path: '/popover/',
    component: Popover,
  },
  {
    path: '/preloader/',
    component: Preloader,
  },
  {
    path: '/progressbar/',
    component: Progressbar,
  },
  {
    path: '/pull-to-refresh/',
    component: PullToRefresh,
  },
  {
    path: '/radio/',
    component: Radio,
  },
  {
    path: '/range/',
    component: Range,
  },
  {
    path: '/searchbar/',
    component: Searchbar,
  },
  {
    path: '/searchbar-expandable/',
    component: SearchbarExpandable,
  },
  {
    path: '/sheet-modal/',
    component: SheetModal,
  },
  {
    path: '/smart-select/',
    component: SmartSelect,
  },
  {
    path: '/sortable/',
    component: Sortable,
  },
  {
    path: '/statusbar/',
    component: Statusbar,
  },
  {
    path: '/subnavbar/',
    component: Subnavbar,
  },
  {
    path: '/subnavbar-title/',
    component: SubnavbarTitle,
  },
  {
    path: '/swiper/',
    component: Swiper,
    routes: [
      {
        path: 'swiper-horizontal/',
        component: SwiperHorizontal,
      },
      {
        path: 'swiper-vertical/',
        component: SwiperVertical,
      },
      {
        path: 'swiper-space-between/',
        component: SwiperSpaceBetween,
      },
      {
        path: 'swiper-multiple/',
        component: SwiperMultiple,
      },
      {
        path: 'swiper-nested/',
        component: SwiperNested,
      },
      {
        path: 'swiper-loop/',
        component: SwiperLoop,
      },
      {
        path: 'swiper-3d-cube/',
        component: Swiper3dCube,
      },
      {
        path: 'swiper-3d-coverflow/',
        component: Swiper3dCoverflow,
      },
      {
        path: 'swiper-3d-flip/',
        component: Swiper3dFlip,
      },
      {
        path: 'swiper-fade/',
        component: SwiperFade,
      },
      {
        path: 'swiper-scrollbar/',
        component: SwiperScrollbar,
      },
      {
        path: 'swiper-gallery/',
        component: SwiperGallery,
      },
      {
        path: 'swiper-custom-controls/',
        component: SwiperCustomControls,
      },
      {
        path: 'swiper-parallax/',
        component: SwiperParallax,
      },
      {
        path: 'swiper-lazy/',
        component: SwiperLazy,
      },
      {
        path: 'swiper-pagination-progress/',
        component: SwiperPaginationProgress,
      },
      {
        path: 'swiper-pagination-fraction/',
        component: SwiperPaginationFraction,
      },
      {
        path: 'swiper-zoom/',
        component: SwiperZoom,
      },
    ],
  },
  {
    path: '/swipeout/',
    component: Swipeout,
  },
  {
    path: '/tabs/',
    component: Tabs,
  },
  {
    path: '/tabs-static/',
    component: TabsStatic,
  },
  {
    path: '/tabs-animated/',
    component: TabsAnimated,
  },
  {
    path: '/tabs-swipeable/',
    component: TabsSwipeable,
  },
  {
    path: '/tabs-routable/',
    component: TabsRoutable,
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: `
        <div class="block">
          <p>Tab 1 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
        </div>
        `,
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: `
        <div class="block">
          <p>Tab 2 content</p>
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: `
        <div class="block">
          <p>Tab 3 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
    ],
  },
  {
    path: '/toast/',
    component: Toast,
  },
  {
    path: '/toggle/',
    component: Toggle,
  },
  {
    path: '/toolbar-tabbar/',
    component: ToolbarTabbar,
    routes: [
      {
        path: 'tabbar/',
        component: Tabbar,
      },
      {
        path: 'tabbar-labels/',
        component: TabbarLabels,
      },
      {
        path: 'tabbar-scrollable/',
        component: TabbarScrollable,
      },
      {
        path: 'toolbar-hide-scroll/',
        component: ToolbarHideScroll,
      },
    ],
  },
  {
    path: '/timeline/',
    component: Timeline,
  },
  {
    path: '/timeline-vertical/',
    component: TimelineVertical,
  },
  {
    path: '/timeline-horizontal/',
    component: TimelineHorizontal,
  },
  {
    path: '/timeline-horizontal-calendar/',
    component: TimelineHorizontalCalendar,
  },
  {
    path: '/virtual-list/',
    component: VirtualList,
  },

  // Color Themes
  {
    path: '/color-themes/',
    component: ColorThemes,
  },

];
