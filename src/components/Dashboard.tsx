'use client';
import { ReactNode, useEffect, useMemo } from 'react';
import { Text, NavLink, Burger, Group, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHome, Icon } from '@tabler/icons-react';
import useUser, { handleUserLogout } from '@/utils/hooks/useUser';
import { usePathname, useRouter } from 'next/navigation';
import NotificationBell from '@/components/theme/elements/NotificationBell';


interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: {
    label: string;
    icon: Icon;
    href: string;
    showList?: boolean;
    badge?: React.ReactNode;
    children?: {
      label: string;
      icon: Icon;
      href: string;
      showList?: boolean;
      badge?: React.ReactNode;
      children?: any[]; // recursive for deeper nesting if needed
    }[];
  }[];
  prefix: string
  title?: string
}

export default function Dashboard({ children, navItems: navigationItems, title = "پنل کاربری", prefix }: DashboardLayoutProps) {
  const [sidebarOpen, { toggle }] = useDisclosure(false);
  const user = useUser();
  const pathname = usePathname();
  const active = useMemo(() => {
    const target = pathname.split("/").slice(2).join("/") || "";
    for (const item of navigationItems) {
      if (item.href === target) return item;
      const child = item.children?.find(o => o.href === target);
      if (child) return child;
    }
    return navigationItems[0];
  }, [pathname])
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth")
    }
  }, [user])

  const renderNavLinks = (items: any[]) =>
    items.map((item) =>
      item.children && item.children.length > 0 ? (
        <NavLink
          key={item.href}
          label={item.label}
          href={item?.children?.[0]?.href}
          leftSection={<item.icon size="1.1rem" stroke={1.5} className="mx-2" />}
          rightSection={item.badge}
          active={item.href === active.href}
          className="rounded-lg transition-all duration-200"
          color="secondary"
          defaultOpened={item.children.some((c: any) => c.href === active.href)}
        >
          {renderNavLinks(item.children)}
        </NavLink>
      ) : (
        <NavLink
          key={item.href}
          href={"/" + prefix + "/" + item.href}
          label={item.label}
          leftSection={<item.icon size="1.1rem" stroke={1.5} className="mx-2" />}
          rightSection={item.badge}
          active={item.href === active.href}
          onClick={() => {
            if (window.innerWidth < 1024) toggle();
          }}
          className="rounded-lg transition-all duration-200"
          color="secondary"
        />
      )
    );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-50 z-40 lg:hidden"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        flex justify-between flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-start p-6 border-b border-gray-100">
          <div>
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-10 ml-4"
            />
          </div>
          <Text size="lg" fw={700} className="text-gray-800">
            {title}
          </Text>
          <Burger
            opened={sidebarOpen}
            onClick={toggle}
            size="sm"
            className="lg:hidden"
          />
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <div className="p-4">
              <Text
                size="xs"
                fw={600}
                className="text-gray-500 uppercase tracking-wider mb-4"
              >
                منو
              </Text>
            </div>

            {/* Navigation Items */}
            <div className="px-3">
              <div className="space-y-1">
                {renderNavLinks(navigationItems)}
                <NavLink
                  label="صفحه اصلی"
                  href='/'
                  leftSection={<IconHome size="1.1rem" className='mx-2' stroke={1.5} />}
                  className="rounded-lg transition-all duration-200"
                  color='secondary'
                />
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-gray-100">
            <NavLink
              label="خروج"
              onClick={async () => {
                handleUserLogout(() => {
                  router.refresh();
                })
              }}
              leftSection={<IconLogout size="1.1rem" className='mx-2' stroke={1.5} />}
              className="rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
              styles={{
                root: {
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  color: '#dc2626',
                  '&:hover': {
                    backgroundColor: '#fef2f2',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-0 p-3  container">
        {/* Top Header */}
        <Paper className="h-16 border-b border-gray-200 bg-white shadow-sm">
          <Group h="100%" px="lg" className="justify-between!">
            <Group>
              <Burger
                opened={sidebarOpen}
                onClick={toggle}
                size="sm"
                className="lg:hidden"
              />
              <Text size="xl" fw={600} className="text-gray-800">
                {active.label}
              </Text>
            </Group>

            <Group>
              {prefix === "user" && <NotificationBell />}
              <p>{user?.name}</p>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Text size="sm" fw={600} className="text-blue-600">
                  {user?.name?.slice(0, 1)}
                </Text>
              </div>
            </Group>
          </Group>
        </Paper>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="h-full p-2">
            {(active?.showList && pathname.endsWith(prefix)) ? (
              <div className='my-3'>
                <h2>به {title} خوش آمدید</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
                  {navigationItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={"/" + prefix + "/" + item.href}
                      label={
                        <span className="flex items-center gap-2 text-lg font-semibold">
                          <item.icon size={28} stroke={1.7} className="text-primary" />
                          <span>{item.label}</span>
                        </span>
                      }
                      className={`
                      rounded-xl shadow-md bg-white border border-gray-100
                      hover:shadow-lg transition-all duration-200
                      px-6 py-6 flex items-center justify-start
                      ${item.href === active.href ? "ring-2 ring-primary" : ""}
                    `}
                      color="primary"
                    />
                  ))}
                </div>
              </div>
            ) : children}
          </div>
        </main>
      </div>
    </div>
  );
}