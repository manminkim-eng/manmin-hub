#!/usr/bin/env python3
"""MANMIN 공통 폰트 서브셋 빌더
   KS X 1001 한글 2,350 + KS 기호 987 + 라틴 + 공학기호 + 실사용/상용 한자 180 = 3,659자
   사용: python subset.py <원본.ttf> <출력.woff2>
   ※ fonttools==4.63.0 / Brotli==1.2.0 고정 시 바이트 재현 가능"""
import sys
from fontTools.subset import main as subset_main


def charset() -> str:
    s = set(chr(c) for c in range(0x20, 0x7F))                      # 라틴
    for hi in range(0xB0, 0xC9):                                    # KS X 1001 한글 2350
        for lo in range(0xA1, 0xFF):
            try: s.add(bytes([hi, lo]).decode('euc-kr'))
            except Exception: pass
    for hi in range(0xA1, 0xAF):                                    # KS X 1001 기호 987
        for lo in range(0xA1, 0xFF):
            try: s.add(bytes([hi, lo]).decode('euc-kr'))
            except Exception: pass
    s |= set('ⓐ①②③④⑤⑥⑦⑧⑨⑩㎡㎥㎜㎝㎞㎏㎖ℓ㎾㎿′″℃±×÷≤≥≠√∑∞·…※→←↑↓○●◇◆□■△▲▽▼☆★“”‘’–—')
    s |= set('©®™°′″‰µ₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹¼½¾⅓⅔⅛⅜⅝⅞')
    s |= set('−∓≈≡∫∂∇∠∥⊥∴∵∈∉⊂⊃∪∩✓✔✕✖✗✘☑☒□■☀☁☂☃⚖⚙⚡⚠⚑⌂⌘⌫⏎')
    s |= set('▶◀▲▼◆◇○●◎◐☞☜⇒⇔⟶⟵↔↕⤴⤵⑪⑫⑬⑭⑮ⓐⓑⓒⓓⓔ㈜№℡')
    s |= set('㎈㎉㎍㎎㎐㎑㎒㎓㎕㎗㎘㎚㎛㎢㎤㎥㎦㎧㎨㎩㎪㎫㎬㎭㎳㎲㎱㎴㎵㎶㎷㎸㎹㎺')
    s |= set('〔〕〈〉《》「」『』【】〖〗')
    s |= set('主具多小島常弗御日時桁棟橋水汚江漁盤眞筽篒線美萬證路車鋼雨電韓頃')   # WAP 실사용 한자
    s |= set('印章社株有限會計事務所建築士設計監理施工構造機械設備消防土木'      # 업무 상용 한자
             '安全診斷檢査報告書意見承認許可申請完了竣工着工變更圖面基準法令'
             '第條項號別表附則施行規則告示訓令例規條例判例大法院憲法'
             '年月日時分秒曜週期間以上以下未滿超過每回次個所階層棟'
             '東西南北中央上下左右前後內外高低長短大中小新舊'
             '金水火木土日月火曜男女人名住民登錄番號電話住所'
             '韓國全北益山市郡邑面洞里番地'
             '收入支出金額單價數量合計小計總計稅價格見積')
    return ''.join(sorted(s))


if __name__ == '__main__':
    src, out = sys.argv[1], sys.argv[2]
    cs = charset()
    with open('_charset.txt', 'w', encoding='utf-8') as f:
        f.write(cs)
    subset_main([src, '--text-file=_charset.txt', f'--output-file={out}',
                 '--flavor=woff2', '--layout-features=kern,liga,calt',
                 '--no-hinting', '--desubroutinize'])
    print('서브셋 글자수', len(cs))
