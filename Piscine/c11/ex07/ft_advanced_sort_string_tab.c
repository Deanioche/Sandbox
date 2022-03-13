/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_advanced_sort_string_tab.c                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/30 17:32:18 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/30 17:32:21 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

void	ft_advanced_sort_string_tab(char**tab, int(*cmp)(char *, char *))
{
	int		cnt;
	int		i;
	int		j;
	char	*tmp;

	cnt = 0;
	while (tab[cnt])
		cnt++;
	i = 0;
	while (i < cnt)
	{
		j = 0;
		while (j < cnt - i - 1)
		{
			if ((*cmp)(tab[j], tab[j + 1]) > 0)
			{
				tmp = tab[j];
				tab[j] = tab[j + 1];
				tab[j + 1] = tmp;
			}
			j++;
		}
		i++;
	}
}
