import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
  console.log('ミドルウェア');

  return NextResponse.next();
}

// 配列へミドルウェアを適用する範囲を設定する。
export const config = {
  matcher: ['/', '/task']
}