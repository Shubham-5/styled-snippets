import { Drawer as VaulDrawer } from "vaul";

export function Drawer() {
  return (
    <>
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className="fixed inset-0 bg-black/40" />
        <VaulDrawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <VaulDrawer.Title className="font-medium mb-4">
                HTML
              </VaulDrawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
            </div>
          </div>
          <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto"></div>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </>
  );
}

export { VaulDrawer };
